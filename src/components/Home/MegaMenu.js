import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class MegaMenu extends Component {
   constructor(props) {
       super();
   }
  MenuItemClick=(event)=>{
        event.target.classList.toggle("active");
      let panel = event.target.nextElementSibling;
      if(panel.style.maxHeight){
          panel.style.maxHeight=null;
      }else{
          panel.style.maxHeight=panel.scrollHeight + "px"
      }

  }

    render() {

        let ParentList = this.props.data;
        let MyView = ParentList.map((ParentList,i)=>{
            return <div key={i.toString()}>
                <Button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src={ParentList.ParentCategoryImg}/>{ParentList.ParentCategoryName}</Button>
                <div className="panel">
                    <ul>
                        {
                            (ParentList.SubCategory).map((ChildList,i)=>{
                                return <li><a href="#" className="accordionItem"></a>{ChildList.cat2_name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        })

        return (
            <div className="accordionMenuDiv mt-5">
                <div className="accordionMenuDivInside">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenu;