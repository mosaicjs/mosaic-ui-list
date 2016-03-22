import React from 'react';
import { DataSetLayout } from 'mosaic-ui';

export default class ListPagination extends DataSetLayout {

    get buttonsNumber() {
        return this.props.buttonsNumber || 5;
    }
    
    _getLabels() {
        if (!this._labels) {
            this._labels = this.props.labels || {
                first : <span>&nbsp;<i className="glyphicon glyphicon-step-backward"></i></span>,
                prev : <span><i className="glyphicon glyphicon-chevron-left" />…</span>,
                next : <span>…<i className="glyphicon glyphicon-chevron-right" /></span>,
                last : <span><i className="glyphicon glyphicon-step-forward"></i>&nbsp;</span>,
            }
        }
        return this._labels;
    }
    
    _setPage(pageId, ev) {
        this.props.dataSet.pageIdx = pageId;
        ev.stopPropagation();
        ev.preventDefault();
    }

    _renderButton(index, label, key, activeClass) {
        var className;
        var pageIndex = this.props.dataSet.pageIdx;
        if (pageIndex === index) {
            className = activeClass;
        }
        return (
            <li key={key} className={className}>
                <a href="#" onClick={this._setPage.bind(this, index)}>
                    {label}
                </a>
            </li>
        );
    }
    
    render() {
        var dataSet = this.props.dataSet;
        var pageSize = dataSet.pageSize;
        var pageIndex = dataSet.pageIdx;
        var pageCount = dataSet.pageNumber;
        var className = this.props.className || 'pagination';
        if (pageCount <= 1) {
            return <div className={className}/>;
        }
        var buttons = [];
        var buttonsNumber = this.buttonsNumber;
        var labels = this._getLabels();
        buttons.push(this._renderButton(0, labels.first || '«', 'prev', 'disabled'));
        var from = Math.max(0, pageIndex - Math.floor(buttonsNumber / 2));
        if (from + buttonsNumber >= pageCount) {
            from = Math.max(0, pageCount - buttonsNumber);
        }
        var to = Math.min(pageCount, from + buttonsNumber);

        var index;
        var button;
        if (from > 0) {
            index = Math.max(0, pageIndex - buttonsNumber);
            button = this._renderButton(index, labels.prev || '…', 'space-' + index);
            buttons.push(button);
        }
        for (var i = from; i < to; i++) {
            buttons.push(this._renderButton(i, (i + 1) + '', 'item-' + i, 'active'));
        }
        if (to < pageCount) {
            index = Math.min(pageCount - 1, pageIndex + buttonsNumber)
            button = this._renderButton(index, labels.next || '…', 'space-' + index);
            buttons.push(button);
        }
        buttons.push(this._renderButton(Math.max(0, pageCount - 1), labels.last || '»', 'next',
                'disabled'));
        return <ul key={this.props.key} className={className}>{buttons}</ul>;
    }
}
ListPagination.Factory = ListPagination.newFactory();
