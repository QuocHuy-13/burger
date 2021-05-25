import React from 'react';
import "./Burger.css";
import { useSelector,useDispatch } from "react-redux"
import { addBreadMid, deleteBreadMid } from '../redux/burgerAction';

const Burger = () => {
    const burger = useSelector(state => state.burger);
    const menu = useSelector(state => state.menu);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch() ;

    var renderBreadMid = () => {
        return Object.entries(burger).map(([item, value], index) => {

            let breadMid = [];
            for (let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={item}></div>)
            }
            return breadMid;
        })
    }

    var renderMenu = () => {
        return Object.entries(menu).map(([itemBread, price], index) => {
            return (
                <tr key={index}>
                    <td>{itemBread}</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-success" 
                            onClick={() => dispatch(deleteBreadMid(
                                itemBread,
                                -1
                            ))}
                        >-
                        </button>
                        {burger[itemBread]}
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => dispatch(addBreadMid(
                                itemBread,
                                1
                            ))}
                        >+
                        </button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[itemBread] * price}</td>
                </tr>
            )
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div className="breadTop"></div>
                    {renderBreadMid()}
                    <div className="breadBottom"></div>
                </div>
                <div className="col-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Thức ăn</th>
                                <th></th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderMenu()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td>Tổng cộng</td>
                                <td>{total}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Burger;
