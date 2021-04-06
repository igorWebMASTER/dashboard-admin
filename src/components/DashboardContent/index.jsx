import React from 'react';

import { 
    ContainerDashboard ,  
    ContentUsers , 
    CardsInfoContainer, 
    MainCharts
} from './styles';

function DashboardContent() {
  return (
    <>
        <ContainerDashboard> 
          <CardsInfoContainer>
            <div>
                <span>Recargas</span>
                <span className="text-inner">60</span>
            </div>
            <div>
                <span>Portabilidade</span>
                <span className="text-inner">43</span>
            </div>
            <div>
                <span>Ativações</span>
                <span className="text-inner">16</span>
            </div>
            <div>
                <span>Em espera</span>
                <span className="text-inner">64</span>
            </div>
            </CardsInfoContainer>
            <MainCharts >
              <div className="chart-graph"> 
                <h3>Tendências de hoje</h3>  
                <p className="text-primary">de 05 Jan 2021, 09:41 AM</p>
                {/* <MultiAxisLine /> */}
              </div>
              <div className="info-charts">
                <div>
                  <h4>Resolvido</h4>
                  <span>449</span>
                </div>
                <div>
                  <h4>Recebido</h4>
                  <span>426</span>
                </div>
                <div>
                  <h4>Média de tempo de retorno</h4>
                  <span>33m</span>
                </div>
                <div>
                  <h4>Média de resposta</h4>
                  <span>3h 8m</span>
                </div>
                <div>
                  <h4>Range de atuação</h4>
                  <span>94%</span>
                </div>
              </div>
            </MainCharts>

            <ContentUsers>
              <div className="content-users-left">
                 <header>
                   <div>
                      <h2>Não resolvido</h2>
                      <p className="text-primary">Grupo: <span>Suporte</span></p> 
                    </div>

                    <div>
                      <a href="">Ver detalhes</a>
                    </div>
                  </header>
                  
                  <main>
                    <div>
                        Waiting on Feature Request <span>4238</span>
                    </div>
                    <div>
                        Awaiting Customer Response <span>4238</span>
                    </div>
                    <div>
                        Awaiting Developer Fix <span>4238</span>
                    </div>
                    <div>
                        Pending <span>4238</span>
                    </div>
                  </main>


              </div>

              <div className="content-users-right">
                <header>
                   <div>
                      <h2>Não resolvido</h2>
                      <p className="text-primary">Grupo: <span>Suporte</span></p> 
                    </div>

                    <div>
                      <a href="">Ver tudo</a>
                    </div>
                  </header>


                  <main>
                    <div>
                      
                      <span>  
                        <input type="checkbox" name="1" id=""/> Waiting on Feature Request</span> 
                        <span className="label-todo progress">urgent</span>
                    
                    </div>
                    <div>
                    <span>  
                      <input type="checkbox" name="1" id=""/> Waiting on Feature Request</span> 
                      <span className="label-todo done">done</span>

                    </div>
                    <div>
                      <span>  <input type="checkbox" name="1" id=""/> Waiting on Feature Request</span> 
                      <span className="label-todo progress">in progress</span>

                    </div>
                    <div>
                      <span>  <input type="checkbox" name="1" id=""/> Waiting on Feature Request</span> 
                      <span className="label-todo default">in progress</span>

                    </div>
                  </main>
                
              </div>
            </ContentUsers>


            <ContentUsers>
              <div className="content-users-left">
                 <header>
                   <div>
                      <h2>Não resolvido</h2>
                      <p className="text-primary">Grupo: <span>Suporte</span></p> 
                    </div>

                    <div>
                      <a href="">Ver detalhes</a>
                    </div>
                  </header>
              </div>
            </ContentUsers>
        </ContainerDashboard>
    
        </>
  );
}

export default DashboardContent;