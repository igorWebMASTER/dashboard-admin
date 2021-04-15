import React from 'react';

import { 
    ContainerDashboard ,  
    ContentUsers , 
} from './styles';

function RechargesContent() {
  return (
    <>
        <ContainerDashboard> 
            {/* <ContentUsers>
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
                        Detalhes <span>4238</span>
                    </div>
                    <div>
                    Detalhes <span>4238</span>
                    </div>
                    <div>
                    Detalhes <span>4238</span>
                    </div>
                    <div>
                    Detalhes<span>4238</span>
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
                        <input type="checkbox" name="1" id=""/> Waiting on Feature Request
                      </span> 
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
            </ContentUsers> */}


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

export default RechargesContent;