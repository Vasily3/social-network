import React, {useEffect} from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../reducers/usersReducer";
import User from "../../components/User/User";
import ReactPaginate from 'react-paginate';
import {useHistory} from 'react-router-dom';
import Preloader from "../../components/Preloader/Preloader";

const Users = (props) => {
    useEffect(() => {
        if (props.match.params.num) {
            props.getUsers(props.pageSize, props.match.params.num);
        } else {
            props.getUsers(props.pageSize, props.currentPage);
        }

        return props.setCurrentPage(null);
    }, [props.pageSize, props.currentPage]);

    const history = useHistory();

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    const handlePageClick = (data) => {
        let selected = data.selected + 1;
        if (data.selected === 0) {
            props.setCurrentPage(selected);
            return history.push('/')
        } else {
            props.setCurrentPage(selected);
            history.push(`/page/${selected}`);
        }
    };

    const buildHref = (data) => {
        let selected = `/page/${data}`;
        return selected;
    };

    const setPageFromUrl = () => {
        if(props.match.params.num) {
            return Number(props.match.params.num) - 1;
        }
        return 0;
    };

    return (
        <>{props.isFetching ? <Preloader/> : null}
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
                props.usersArr.map(user => {
                    return (
                        <User user={user} key={user.id} follow={props.follow} unfollow={props.unfollow}
                              userId={props.userId}/>
                    );
                })
            }
        </>
    );
};

const mapStateToProps = (state) => ({
    currentPage: state.users.currentPage,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    usersArr: state.users.usersArr,
    userId: state.auth.user,
    isFetching: state.auth.isFetching,
});

const mapDispatchToProps = {
    getUsers: getUsers,
    setCurrentPage: setCurrentPage,
    follow: follow,
    unfollow: unfollow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
