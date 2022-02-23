import React, {useEffect, VFC} from "react";
import {useDispatch} from "react-redux";
import {getUsers, setCurrentPage} from "../../reducers/users/usersSlice";
import User from "../../components/User/User";
import ReactPaginate from "react-paginate";
import {useHistory} from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TProps} from "./types";


const Users: VFC<TProps> = (props: TProps) => {
    const dispatch = useDispatch();
    const currentPage = useTypedSelector((state) => state.users.currentPage);
    const totalCount = useTypedSelector((state) => state.users.totalCount);
    const pageSize = useTypedSelector((state) => state.users.pageSize);
    const usersArr = useTypedSelector((state) => state.users.usersArr);
    const isFetching = useTypedSelector((state) => state.auth.isFetching);

    useEffect(() => {
        if (props.match.params.num) {
            dispatch(getUsers(pageSize, props.match.params.num));
            dispatch(setCurrentPage(props.match.params.num));
        } else {
            dispatch(getUsers(pageSize, currentPage));
        }

    }, [props.location]);

    const history = useHistory();

    let pagesCount = Math.ceil(totalCount / pageSize);

    const handlePageClick = (event: { selected: number }) => {
        let selected = event.selected + 1;
        if (event.selected === 0) {
            dispatch(setCurrentPage(selected));
            return history.push('/')
        } else {
            dispatch(setCurrentPage(selected));
            history.push(`/page/${selected}`);
        }
    };

    const buildHref = (data: number) => {
        let selected = `/page/${data}`;
        return selected;
    };

    const setPageFromUrl = () => {
        if (props.match.params.num) {
            return Number(props.match.params.num) - 1;
        }
        return 0;
    };

    if (isFetching) {
        return (
            <Preloader/>
        )
    }

    return (
        <>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pagesCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                activeClassName={'active'}
                onPageChange={handlePageClick}
                hrefBuilder={buildHref}
                forcePage={setPageFromUrl()}
            />
            {
                usersArr.map(user => {
                    return (
                        <User key={user.id} user={user}/>
                    );
                })
            }
        </>
    );
};

export default Users;
