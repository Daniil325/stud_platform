import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { Layout } from "../../components/admin/layout";
import { Outlet, Routes, Route } from "react-router-dom";
import { ThemeList } from "./theme";
import { TestList } from "./test";
import { QuestionList } from "./question";
import { AnswerList, CreateAnswer } from "./answer";
import { UserList } from "./user";
import { ResultList } from "./result";

export const AdminPanel = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Outlet />
                    </Layout>
                }
            >
                <Route path="/theme" element={<ThemeList />} />
                <Route path="/tests" element={<TestList />} />
                <Route path="/questions" element={<QuestionList />} />
                <Route path="/answers" element={<AnswerList />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/results" element={<ResultList />} />

                <Route path="/answers/add" element={<CreateAnswer />} />
            </Route>
        </Routes>
    );
};
