import AdminLayout from "~/components/Layouts/AdminLayout";
import DashboardPage from "~/pages/admin/DashboardPage";
import { Routes, Route, Navigate } from "react-router-dom";
function AdminRouter() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Route>
        </Routes>
    );
}

export default AdminRouter;
