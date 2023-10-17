import React from 'react'

export default function Home() {
  return (
    <div>
  
      <nav className="d-block d-lg-none navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand mx-3" href="/">Dashboard</a>
  <button className="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/">Dashboard</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link" href="/">Product</a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/">Customers</a>
      </li>
      <li className="nav-item active mx-3">
        <a class="nav-link" href="/">Income</a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/">Promote</a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/">Help</a>
      </li>
    </ul>
    
  </div>
</nav>
      
      <div className='container-fluid'>
            
                    <div className='row'>
                        <div className='d-none d-lg-block col-2 bg-black lefti'>
                              <div className='container'>
                                <div className='row my-4 mx-1 text-white fw-bold fs-4'>Dashboard</div>
                                 <hr/>
                                <div className='row border border-black my-3 mx-1 p-2 text-white'>Dashboard</div>
                                <div className='row border border-black my-3 mx-1 p-2 text-white'>Product</div>
                                <div className='row border border-black my-3 mx-1 p-2 text-white'>Customers</div>
                                <div className='row border border-black my-3 mx-1 p-2 text-white'>Income</div>
                                <div className='row border border-black my-3 mx-1 p-2 text-white'>Promote</div>
                                <div className='row border border-black my-3 mx-1 p-2 text-white'>Help</div>
                              </div>
                     </div>
                        <div className='col-12 col-lg-10 righti'>
                            <div className='container-fluid'>
                                 <div className='row m-3 justify-content-between'>
                                    <div className='col-3 p-1 text-danger fw-bold'>Hello Shahrukh !</div>
                                    <div className='col-3'>  <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    
      </form>  </div>
                                 </div>
                                 <hr/>
                                
                                 <div className='row justify-content-evenly my-4'>
                                    <div className='col-5 col-lg-2 p-4 my-3 my-lg-1 text-center border border-3 border-warning rounded-3'>In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, </div>
                                    <div className='col-5 col-lg-2 p-4 my-3 my-lg-1 text-center border border-3 border-warning rounded-3'>In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, </div>
                                    <div className='col-5 col-lg-2 p-4 my-3 my-lg-1 text-center border border-3 border-warning rounded-3'>In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, </div>
                                    <div className='col-5 col-lg-2 p-4 my-3 my-lg-1 text-center border border-3 border-warning rounded-3'>In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, </div>
                                 </div>
                                 <div className='row justify-content-evenly my-4'>
                                  <div className='col-10 col-lg-8 p-4 my-3 my-lg-1 text-center border border-2 border-danger rounded-3'>
                                    <h3>Overview :</h3>
                                    In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration,  In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration,  In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, </div>
                                  <div className='col-10 col-lg-2 p-4 my-3 my-lg-1 text-center border border-2 border-danger rounded-3'>In this method, an iterator itr is created and initialized using begin() function which will point to the first element, and after every iteration, </div>
                                 </div>
                                 <div className='row justify-content-evenly my-4'>
                                  <div className='col-11'>
                                  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                                  </div>
                                 </div>
                                  
                            </div>
                        </div>
                    </div>

        
      </div>
    </div>
  )
}
