import { Routes } from '@angular/router';
import { TemplatePadraoComponent } from './core/tamplate/template-padrao/template-padrao.component';
import { MedicoInclusaoComponent } from './screens/medico/medico-inclusao/medico-inclusao.component';
import { MedicoListagemComponent } from './screens/medico/medico-listagem/medico-listagem.component';

export const routes: Routes = [
    {
        path: "", component: TemplatePadraoComponent, children: [
            { path: 'medico-inclusao', component: MedicoInclusaoComponent },
            { path: "medico-listagem", component: MedicoListagemComponent },
        ]
    }
];
