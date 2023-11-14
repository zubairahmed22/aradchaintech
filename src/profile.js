import React from 'react'

const profile = () => {
  return (
    <section>
   <div className="container">
		<div className="main-body">
			<div className="row">
				<div className="col-lg-4">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
								<div className="mt-3">
									<h4>John Doe</h4>
									
									
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="card">
						<div className="card-body">
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Full Name</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="John Doe"/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Email</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="john@example.com"/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Phone</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="(239) 816-9029"/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Mobile</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="(320) 380-4539"/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Address</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="Bay Area, San Francisco, CA"/>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-3"></div>
								<div className="col-sm-9 text-secondary">
									<input type="button" className="btn btn-primary px-4" value="Save Changes"/>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    </div>
                    </div>
                    </div>
     </section>
  )
}

export default profile