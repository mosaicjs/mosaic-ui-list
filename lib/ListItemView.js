import React from 'react';
import Promise from 'promise';
import { View, ViewLayout } from 'mosaic-ui';

export default class ListItemView extends View {
    get Layout(){ return this.constructor.Layout; }
    
    _renderTitle(){
        const r = this.object;
        return r.get('properties.name');
    }
    _renderContent(){
        const r = this.object;
        return r.get('properties.description');
    }
    // --------------------------------------------
    get openItems() { return this.options.openItems; }
    _toggleOpen() {
        this._setIn(this.openItems, !this.isOpen, true);
    }
    setOpen(open){
        return this._setIn(this.openItems, open, true);
    }
    get isOpen(){
        return this._isIn(this.openItems);
    }
    // --------------------------------------------
    get selectedItems() { return this.options.selectedItems; }
    get isSelectable(){
        const dataSet = this.selectedItems;
        return (!!dataSet);
    }
    get isSelected(){
        return this._isIn(this.selectedItems);
    }
    setSelected(selected){
        return this._setIn(this.selectedItems, selected);
    }
    // --------------------------------------------
    renderView(){
        let key = this.object.id;
        const Layout = this.Layout; 
        return (<Layout key={this.object.id} view={this} />);
    }
    // --------------------------------------------
    _setIn(set, add, exclusive){
        if (!set)
            return Promise.resolve();
        const resource = this.object;
        if (add) {
            if (exclusive) {
                return set.setItems([resource]);
            } else {
                return set.add(resource);
            }
        } else {
            const pos = set.pos(resource);
            return set.remove(pos);
        }
    }
    _isIn(dataSet){
        if (!dataSet)
            return false;
        return dataSet.has(this.object);
    }
}

class ListItemLayout extends ViewLayout {
    constructor(...params){
        super(...params);
        this._toggleOpen = this._toggleOpen.bind(this);
        this._toggleSelection = this._toggleSelection.bind(this);
        this.state = this._newState({
            open : this.props.view.isOpen,
            selected : this.props.view.isSelected
        });
    }
    componentWillReceiveProps(props){
        this._updateState({
            open : props.view.isOpen,
            selected : props.view.isSelected,
        });
    }
    _toggleOpen(ev) {
        this.props.view._toggleOpen();
        ev.preventDefault();
        ev.stopPropagation();
    }
    _toggleSelection(ev) {
        this.props.view.setSelected(!this.state.selected);
        ev.preventDefault();
        ev.stopPropagation();
    }
    render(){
        const view = this.props.view;
        let className = view.className || 'panel panel-default';
        let content;
        if (this.state.open) {
            className += ' selected';
            content = view._renderContent();
        }
        if (content){
            content = (
                <div className="panel-body">
                    {content}
                </div>
            );
        }
        return (
            <div key={this.props.id} className={className}>
                <div className="panel-heading">
                    {this._renderCheckbox()}
                    {this._renderTitle()}
                </div>
                {this._renderContent()}
            </div>
        );
    }
    
    _renderTitle(){
        const view = this.props.view;
        return (
            <a href="#" onClick={this._toggleOpen}>{view._renderTitle()}</a>
        );
    }
    
    _renderCheckbox(){
        const view = this.props.view;
        let checkbox;
        if (view.isSelectable) {
            const checkboxClassName = view.isSelected
                ? "glyphicon glyphicon-check"
                : "glyphicon glyphicon-unchecked";
            checkbox = (
                <a href="#" className="btn" onClick={this._toggleSelection}>
                    <i className={checkboxClassName} />
                </a>
            );
        }
        return checkbox;
    }
    
    _renderContent(){
        const view = this.props.view;
        let content;
        if (this.state.open) {
            content = view._renderContent();
        }
        if (content){
            content = (
                <div className="panel-body">
                    {content}
                </div>
            );
        }
        return content;
    }
}  

ListItemView.Layout = ListItemLayout;
