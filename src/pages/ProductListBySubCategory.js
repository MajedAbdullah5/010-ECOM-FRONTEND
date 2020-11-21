import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/Common/NavMenuDesktop";
import NavMenuMobile from "../components/Common/NavMenuMobile";
import ListByCategory from "../components/ProductDetails/ListByCategory";
import FooterDesktop from "../components/Common/FooterDesktop";
import FooterMobile from "../components/Common/FooterMobile";
import ListBySubCategory from "../components/ProductDetails/ListBySubCategory";

class ProductListBySubCategory extends Component {
    constructor({match}) {
        super();
        this.state = {
            Category: match.params.Category,
            SubCategory: match.params.SubCategory
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>

                <div className="Mobile">
                    <NavMenuMobile/>
                </div>

                <ListBySubCategory SubCategory={this.state.SubCategory} Category={this.state.Category}/>

                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>

            </Fragment>
        );
    }
}

export default ProductListBySubCategory;