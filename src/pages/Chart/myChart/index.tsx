import {
  deleteChartUsingPost,
  listMyChartVoByPageUsingPost,
  retryUsingGet,
} from '@/services/xingbi/chartController';
import { Link, useModel } from '@@/exports';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Avatar, Button, Card, List, message, Modal, Result } from 'antd';
import Search from 'antd/es/input/Search';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import './myChart.css';

/**
 * Chart page
 */
const myChart: React.FC = () => {
  const initSearchParams = {
    // Default to return 6 data items
    pageSize: 6,
    current: 1,
    sortField: 'createTime',
    sortOrder: 'desc',
  };

  const [queryParams, setQueryParams] = useState<API.ChartQueryRequest>({ ...initSearchParams });
  const [chartList, setChartList] = useState<API.Chart[]>();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? [];

  const chartData = async () => {
    try {
      setLoading(true);
      const res = await listMyChartVoByPageUsingPost(queryParams);
      console.log('page:' + res);
      if (res.data) {
        if (res.data.records) {
          res.data.records.forEach((data) => {
            if (data.status === 'succeed') {
              const chartOption = JSON.parse(data.genChart ?? '{}');
              chartOption.title = undefined;
              data.genChart = JSON.stringify(chartOption);
            }
          });
        }
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
      } else {
        message.error('Failed to get my charts');
      }
    } catch (e: any) {
      message.error('Failed to get my charts,' + e.message);
    }
    setLoading(false);
  };

  const { confirm } = Modal;

  const deleteById = (id: any) => {
    confirm({
      title: 'Do you want to delete this chart?',
      icon: <ExclamationCircleFilled />,
      onOk: async () => {
        try {
          console.log(id);
          const res = await deleteChartUsingPost({ id });
          console.log(res);
          if (res.data) {
            message.success('Deleted successfully');
            chartData();
          } else {
            message.error(res.data.message);
          }
        } catch (e: any) {
          message.error('Failed to delete: ' + e.message);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  /**
   * Retry
   * @param chartId
   */
  const retry = async (chartId) => {
    console.log(chartId);
    await retryUsingGet({ chartId });
  };

  // Reload chartData() on initial page load or when query parameters change
  useEffect(() => {
    chartData();
  }, [queryParams]);

  return (
    <div className="my-chart">
      <div className="search-bar">
        <Search
          placeholder="Please enter the chart name"
          loading={loading}
          onSearch={(value) => {
            setQueryParams({
              ...initSearchParams,
              chartName: value,
            });
          }}
          enterButton
        />
      </div>

      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        pagination={{
          onChange: (page, pageSize) => {
            setQueryParams({
              ...initSearchParams,
              current: page,
              pageSize,
            });
          },
          showTotal: (total) => `Total ${total} data items`,
          pageSize: queryParams.pageSize,
          current: queryParams.current,
          total: total,
          className: 'pagination',
        }}
        loading={loading}
        dataSource={chartList}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card className="chart-card">
              <div className="card-header">
                <Avatar
                  src={currentUser && currentUser.userAvatar}
                  className="user-avatar"
                  size={48}
                />
                <div className="chart-info">
                  <h3 className="chart-title">{item.chartName}</h3>
                  <p className="chart-type">
                    {item.chartType ? 'Chart Type: ' + item.chartType : ''}
                  </p>
                </div>
              </div>

              <div className="card-content">
                {item.status === 'succeed' && (
                  <>
                    <div className="analysis-goal">
                      <span>Analysis Goal:</span> {item.goal}
                    </div>
                    <div className="chart-container">
                      <ReactECharts option={JSON.parse(item.genChart ?? '{}')} />
                    </div>
                    <div className="card-actions">
                      <Button
                        danger
                        size={'small'}
                        onClick={() => deleteById(item.id)}
                        className="action-btn"
                      >
                        Delete Chart
                      </Button>
                      <Button
                        type={'primary'}
                        size={'small'}
                        className="action-btn"
                      >
                        <Link to={`/chartDetail/${item.id}`}>Chart Details</Link>
                      </Button>
                    </div>
                  </>
                )}

                {item.status === 'wait' && (
                  <div className="chart-status">
                    <Result
                      status="warning"
                      title="Waiting to generate"
                      subTitle={
                        item.execMessage ??
                        'The queue is busy, please wait patiently'
                      }
                    />
                  </div>
                )}

                {item.status === 'running' && (
                  <div className="chart-status">
                    <Result
                      status="info"
                      title="Generating chart"
                      subTitle={item.execMessage}
                    />
                  </div>
                )}

                {item.status === 'failed' && (
                  <div className="chart-status">
                    <Result
                      status="error"
                      title="Chart generation failed"
                      subTitle={item.execMessage}
                    />
                    <Button
                      danger
                      size={'small'}
                      onClick={() => retry(item.id)}
                      className="action-btn"
                    >
                      Regenerate
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default myChart;
