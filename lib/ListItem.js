import React from 'react';
import { ViewLayout } from 'mosaic-ui';

export default class ListItem extends ViewLayout {
    
    constructor(...params){
        super(...params);
        this._onTitleClick = this._onTitleClick.bind(this);
        this._onCheckboxClick = this._onCheckboxClick.bind(this);
    }

    // --------------------------------------------
    // Overload this method to avoid frequent re-drawing.
    // Used by the ViewLayout in the "shouldComponentUpdate" method
    
    _calculateHash(){ }
    
    // --------------------------------------------
    // Properties
    
    get item() { return this.props.item; }

    get dataSet(){ return this.props.dataSet; }
    
    get selectedItems() { return this.props.selectedItems; }
    get isSelectable(){ return (!!this.selectedItems); }
    get selected(){ return this._isIn(this.selectedItems); }
    set selected(selected){ return this.setSelected(selected); }
    setSelected(selected){ return this._setIn(this.selectedItems, selected); }

    get openItems() { return this.options.openItems; }
    get open(){ return this._isIn(this.openItems); }
    set open(open){ return this.setOpen(open); }
    setOpen(open){ return this._setIn(this.openItems, open, !!this.props.singleOpenItem); }
    
    _setIn(set, add, exclusive){
        if (!set)
            return Promise.resolve();
        const item = this.item;
        if (add) {
            if (exclusive) {
                return set.setItems([item]);
            } else {
                return set.add(item);
            }
        } else {
            const pos = set.pos(item);
            return set.remove(pos);
        }
    }
    _isIn(dataSet){ return !!dataSet && dataSet.has(this.item); }    
    
    // ---------------------------------------------------------
    
    render(){
        return (
            <div className="panel panel-default" {...this.props}>
                {this._renderTitle()}
                {this._renderContent()}
            </div>
        );
    }

    // ---------------------------------------------------------
    // Render title
    
    _onTitleClick(ev) {
        this.open = !this.open;
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    _renderTitle(){
        const title = this.item.get('properties.title') || this.item.get('properties.name');
        return (
            <div className="panel-heading">
                {this._renderCheckbox()}
                <a href="#" onClick={this._onTitleClick}>{title}</a>
            </div>
        );
    }
    
    // ---------------------------------------------------------
    // Render checkbox
    
    _onCheckboxClick(ev) {
        this.selected = !this.selected;
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    _renderCheckbox(){
        let checkbox;
        if (this.isSelectable) {
            const checkboxClassName = this.selected
                ? "glyphicon glyphicon-check"
                : "glyphicon glyphicon-unchecked";
            checkbox = (
                <a href="#" className="btn" onClick={this._onCheckboxClick}>
                    <i className={checkboxClassName} />
                </a>
            );
        }
        return checkbox;
    }
    
    // ---------------------------------------------------------
    // Render the main content of the item
    
    _renderContent(){
        let content;
        if (this.open) {
            content = this.item.get('properties.description');
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
ListItem.Factory = ListItem.newFactory();

