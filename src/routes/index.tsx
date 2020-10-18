import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanages from '../pages/Orphanages';

const Routes: React.FC = ()=>{
    return(
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/map" component={OrphanagesMap} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanages} />
        </Switch>
    );
}

export default Routes;