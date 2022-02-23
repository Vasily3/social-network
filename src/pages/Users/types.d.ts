import {RouteComponentProps} from "react-router-dom";

export interface TProps {
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: {
        isExact: boolean,
        params: {num: number},
        path: string,
        url: string
    },
}
