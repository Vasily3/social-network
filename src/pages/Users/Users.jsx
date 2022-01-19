import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, setCurrentPage} from "../../reducers/usersSlice";
import User from "../../components/User/User";
import ReactPaginate from 'react-paginate';
import {useHistory} from 'react-router-dom';
import Preloader from "../../components/Preloader/Preloader";

const Users = (props) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.users.currentPage);
    const totalCount = useSelector((state) => state.users.totalCount);
    const pageSize = useSelector((state) => state.users.pageSize);
    const usersArr = useSelector((state) => state.users.usersArr);
    const userId = useSelector((state) => state.auth.user);
    const isFetching = useSelector((state) => state.auth.isFetching);

    useEffect(() => {
        if (props.match.params.num) {
            dispatch(getUsers(pageSize, props.match.params.num));
        } else {
            dispatch(getUsers(pageSize, currentPage));
        }

        return dispatch(setCurrentPage(null));
    }, [pageSize, currentPage]);

    const history = useHistory();

    let pagesCount = Math.ceil(totalCount / pageSize);

    const handlePageClick = (data) => {
        let selected = data.selected + 1;
        if (data.selected === 0) {
            dispatch(setCurrentPage(selected));
            return history.push('/')
        } else {
            dispatch(setCurrentPage(selected));
            history.push(`/page/${selected}`);
        }
    };

    const buildHref = (data) => {
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
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                hrefBuilder={buildHref}
                forcePage={setPageFromUrl()}
            />
            {
                usersArr.map(user => {
                    return (
                        <User key={user.id} user={user} userId={userId}/>
                    );
                })
            }
        </>
    );
};

export default Users;
