import axios from "axios";

const axiosSrv = ({ req }) => {
    // if req is server side and for getInitialProps, call this function
    if (typeof window === "undefined") {
        return axios.create({
            baseURL: process.env.NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_REST_API_ENDPOINT : "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
            headers: req.headers,
        });
    }
    // if req is client side and NOT for getInitialProps, call this function
    return axios.create({
        baseURL: "/",
    });
}

export default axiosSrv;