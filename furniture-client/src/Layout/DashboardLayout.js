import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-purple-50 text-cyan-600 font-semibold">

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;