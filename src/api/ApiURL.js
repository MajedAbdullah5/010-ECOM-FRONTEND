class ApiURL{
    static BaseURL = "http://127.0.0.1:8000/api/"
    static VisitorDetails=this.BaseURL+"GetVisitorDetails";
    static ContactDetails=this.BaseURL+"PostContactDetails";
    static SendSiteInfo=this.BaseURL+"SendSiteInfo";
}
export default ApiURL;