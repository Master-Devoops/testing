import { useLocation } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./Dashboard.css";

export default function Dashboard() {
    const location = useLocation();

    // If this page was accessed directly (no routing state passed), show the 404 page
    if (!location.state?.fromLogin) {
        return <NotFound />;
    }

    return (
        <div className="dashboard-container">

            {/* Sidebar */}
            <aside className="sidebar">

                <div>
                    <h2 className="logo">MyDashboard</h2>

                    <ul className="menu">
                        <li className="active">Dashboard</li>
                        <li>Analytics</li>
                        <li>Users</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>

                <div className="sidebar-bottom">
                    <p>© 2026 Dashboard</p>
                </div>

            </aside>

            {/* Main Content */}
            <main className="main-content">

                {/* Topbar */}
                <header className="topbar">
                    <div>
                        <h1>Welcome Back 👋</h1>
                        <p className="subtitle">
                            Here's what's happening with your dashboard today.
                        </p>
                    </div>

                    <button className="profile-btn">
                        Profile
                    </button>
                </header>

                {/* Cards */}
                <section className="cards">

                    <div className="card">
                        <h3>Total Users</h3>
                        <p>1,245</p>
                    </div>

                    <div className="card">
                        <h3>Revenue</h3>
                        <p>$12,450</p>
                    </div>

                    <div className="card">
                        <h3>Orders</h3>
                        <p>320</p>
                    </div>

                    <div className="card">
                        <h3>Pending Tasks</h3>
                        <p>18</p>
                    </div>

                </section>

                {/* Table */}
                <section className="table-section">

                    <div className="table-header">
                        <h2>Recent Activity</h2>

                        <button className="view-btn">
                            View All
                        </button>
                    </div>

                    <table>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>John Doe</td>
                                <td className="success">Completed</td>
                                <td>26 May 2026</td>
                            </tr>

                            <tr>
                                <td>Sarah Khan</td>
                                <td className="pending">Pending</td>
                                <td>25 May 2026</td>
                            </tr>

                            <tr>
                                <td>Alex Smith</td>
                                <td className="success">Completed</td>
                                <td>24 May 2026</td>
                            </tr>

                        </tbody>

                    </table>

                </section>

            </main>

        </div>
    );
}