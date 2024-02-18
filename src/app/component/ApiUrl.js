const Base='http://192.168.0.121:8000/'
class ApiUrl{
    static SendApiUrl="https://hw.arenaclass.stream/cross-login/"
    static BaseUrl=`${Base}`;
    static SendApply=`${Base}api/form/`;
    static SendLogin=`${Base}v1/login/`;
    static ProfileApi=`${Base}v1/profile/`
    static Topbar=`${Base}api/time-date/`
    static BannerApi = `${Base}api/image-list/` 
    static Contact = `${Base}contacts` 
}
export default ApiUrl;