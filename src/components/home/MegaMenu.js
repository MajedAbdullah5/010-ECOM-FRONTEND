import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class MegaMenu extends Component {
   constructor() {
       super();
       this.MegaMenu = this.MegaMenu.bind(this);
   }
   componentDidMount() {
       this.MegaMenu();
   }

    MegaMenu(){
         var acc =  document.getElementsByClassName("accordion");
         var accNum = acc.length;
            for(let i = 0; i<accNum; i++){
                acc[i].addEventListener("click",function(){
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                        panel.style.maxHeight=null;
                    }else{
                        panel.style.maxHeight=panel.scrollHeight + "px"
                    }
                })

            }
    }
    render() {
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                    <Button className="accordion"><img className="accordionMenuIcon" src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's Clothing</Button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItem"></a>Man Shirt</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default MegaMenu;