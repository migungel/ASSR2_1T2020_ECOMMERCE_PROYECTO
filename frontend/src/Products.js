import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ProductServices from './service/ProductServices';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import {Panel} from 'primereact/panel';

export class Products extends React.Component{
  constructor(){
    super();
    this.state={
      layout:'grid'
    };
    this.productServices = new ProductServices();
    this.itemTemplate = this.itemTemplate.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }
  componentDidMount(){this.productServices.getAll().then(data =>this.setState({products:data}))}
  
  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.setState({
            sortOrder: -1,
            sortField: value.substring(1, value.length),
            sortKey: value
        });
    }
    else {
        this.setState({
            sortOrder: 1,
            sortField: value,
            sortKey: value
        });
    }
}


  renderListItem(data) {
    return (
        <div className="p-col-12">
            <div className="product-details">
                <div>
                    <div className="p-grid">
                        <div className="p-col-12">id: <b>{data.id}</b></div>
                        <div className="p-col-12">name: <b>{data.name}</b></div>
                        <div className="p-col-12">price: <b>{data.price}</b></div>
                        <div className="p-col-12">description: <b>{data.description}</b></div>
                        <div className="p-col-12">stock: <b>{data.stock}</b></div>
                    </div>
                </div>
                <button type="submit" className="googles-cart pgoogles-cart">Comprar</button>
            </div>
        </div>
    );
}

renderGridItem(data) {
    return (
        <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
          <form action="https://www.w3docs.com/">
            <Panel header={data.id} style={{ textAlign: 'center' }}>
                <div className="p-col-12">id: <b>{data.id}</b></div>
                <div className="p-col-12">name: <b>{data.name}</b></div>
                <div className="p-col-12">price: <b>{data.price}</b></div>
                <div className="p-col-12">description: <b>{data.description}</b></div>
                <div className="p-col-12">stock: <b>{data.stock}</b></div>
                <button type="submit" className="googles-cart pgoogles-cart">Comprar</button>
                  
            </Panel>
            </form>
        </div>
    );
}
  itemTemplate(product,layout) {
    if (!product) {
      return;
  }    
    if (layout === 'list') {
      return this.renderListItem(product);
    }
    if (layout === 'grid') {
      return this.renderGridItem(product);
    }
}

renderHeader() {
  const sortOptions = [
      {label: 'Mayor Precio', value: '!price'},
      {label: 'Menor Precio', value: 'price'},
      {label: 'Nombre', value: 'name'}
  ];

  return (
    <div className="p-grid">
        <div className="p-col-6" style={{textAlign: 'left'}}>
            <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} style={{width: '12em'}} />
        </div>
        <div className="p-col-6" style={{textAlign: 'left'}}>
            <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
        </div>
    </div>
  );
}

  render(){
    const header = this.renderHeader();
    return(
      <div className="dataview-demo">
        <DataView value={this.state.products} layout={this.state.layout} header={header}
                itemTemplate={this.itemTemplate} aginator={true} paginatorPosition={'both'} p rows={20}
                sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
      </div>
    )
  }
}
