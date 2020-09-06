import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="mx-auto flex p-4 bg-white shadow-xl">            
            <div className="ml-6 py-1">
                <h4 className="text-xl text-gray-900 leading-tight">PCBuilderLK</h4>                
            </div>
        </div>
      </header>
    );
  }
}

export default Header;
