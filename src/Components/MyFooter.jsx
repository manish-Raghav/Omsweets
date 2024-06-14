import React from 'react'

const MyFooter = () => {
    return (
      
        <footer className="relative bg-white border-t-zinc-300 border-2  pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
          
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                 Om_Sweet Shop Khair Road Tentigaon, Mant (Mathura)
                </h5>
                <div className="mt-6 flex gap-4">
                  {/* <FaXTwitter className='size-8 text-fuchsia-700'/>
                  
                    <FaInstagram  className='size-8 text-fuchsia-700'/>
                    <IoIosMail  className='size-8 text-fuchsia-700'/>
                    <FaWhatsapp  className='size-8 text-fuchsia-700'/> */}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://www.creative-tim.com/presentation">About Us
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://blog.creative-tim.com">Blog
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://www.github.com/creativetimofficial">Github
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://www.creative-tim.com/bootstrap-themes/free">Free Products
                        </a>
                      </li>
    
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
                      </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/terms">Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/privacy">Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/contact-us">Contact Us
                        </a>
                      </li>
                    </ul>
    
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />
         
          </div>
        </footer>
      );
    
}

export default MyFooter
