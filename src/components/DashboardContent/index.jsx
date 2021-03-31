import React from 'react';

import MultiAxisLine from './Charts/main'
import { ContainerDashboard ,  ContentUsers , CardsInfoContainer, MainCharts} from './styles';

function DashboardContent() {
  return (
    <>
        <ContainerDashboard> 
          <CardsInfoContainer>
            <div>
                <span>Unsolved</span>
                <span className="text-inner">60</span>
            </div>
            <div>
                <span>Overdue</span>
                <span className="text-inner">43</span>
            </div>
            <div>
                <span>Open</span>
                <span className="text-inner">16</span>
            </div>
            <div>
                <span>On Hold</span>
                <span className="text-inner">64</span>
            </div>
            </CardsInfoContainer>
            <MainCharts >
              <div className="chart-graph"> 
                <h3>Todays trends</h3>  <br/>
                <p>as of 25 May 2019, 09:41 PM</p>
                <MultiAxisLine />
              </div>
              <div className="info-charts">
                <div>
                  <h4>Resolved</h4>
                  <span>449</span>
                </div>
                <div>
                  <h4>Received</h4>
                  <span>426</span>
                </div>
                <div>
                  <h4>Average first response time</h4>
                  <span>33m</span>
                </div>
                <div>
                  <h4>Average response time</h4>
                  <span>3h 8m</span>
                </div>
                <div>
                  <h4>Resolution within SLA</h4>
                  <span>94%</span>
                </div>
              </div>
            </MainCharts>

            <ContentUsers>
              <div className="content-users-left">
                  <h2>Unsolved</h2>
                  <span className="text-primary">Group</span> <span>Suport</span>
              </div>

              <div className="content-users-right">
                  <span>Unsolved</span>
                  <span className="text-primary">60</span>
              </div>
            </ContentUsers>
        </ContainerDashboard>
    
        </>
  );
}

export default DashboardContent;