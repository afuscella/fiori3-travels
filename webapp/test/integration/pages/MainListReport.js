sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.fe.travels.fiori3.travels',
            componentId: 'TravelList',
            entitySet: 'Travel'
        },
        AdditionalCustomListReportDefinition
    );
});