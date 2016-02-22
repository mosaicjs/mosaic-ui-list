import React from 'react';
import { View } from 'mosaic-ui';
import ListPagination from './ListPagination';

export default class ListPaginationView extends View {
    renderView(){
        const dataSet = this.options.dataSet || this.object;
        const dependencies = this.options.dependencies || [dataSet];
        return (<ListPagination {...this.options} dataSet={dataSet} dependencies={dependencies}/>);
    }
}
