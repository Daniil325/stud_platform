import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { Layout } from "../../components/admin/layout";

export const AdminPanel = () => {
    return (
        <PrimeReactProvider>
            <Layout />
        </PrimeReactProvider>
    );
};
