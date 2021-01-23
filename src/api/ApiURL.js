class ApiURL {
    static BaseURL = "http://127.0.0.1:8000/api/";
    static VisitorDetails = this.BaseURL + "GetVisitorDetails";
    static ContactDetails = this.BaseURL + "PostContactDetails";
    static SendSiteInfo = this.BaseURL + "SendSiteInfo";
    static SendCategoryDetails = this.BaseURL + "SendCategoryDetails";
    static SendSliderInfo = this.BaseURL + "SendSliderInfo";

    static ProductListByRemark(Remark) {
        return this.BaseURL + "ProductListByRemark/" + Remark;
    }

    static ProductListBySubCategory(Category, SubCategory) {
        return this.BaseURL + "ProductListBySubCategory/" + Category + "/" + SubCategory;
    }

    static ProductListByCategory(Category) {
        return this.BaseURL + "ProductListByCategory/" + Category;
    }
    static ProductDetails(ProductCode){
        return this.BaseURL + "productDetails/"+ ProductCode;
    }
    static featuredProducts = this.BaseURL+"featuredProducts";
    static specialCollection = this.BaseURL+"special_collection";
    static newArrival  = this.BaseURL+"new_arrivals";


}

export default ApiURL;