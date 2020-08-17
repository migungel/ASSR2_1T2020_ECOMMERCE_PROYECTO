import React from 'react';
//import {DataTable} from 'primereact/datatable';
//import {Column} from 'primereact/column';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ProductServices from './service/ProductServices';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import {dialog, Dialog} from 'primereact/dialog';
import {panel,Panel} from 'primereact/panel';
class App extends React.Component{
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
                <Button icon="pi pi-search" onClick={(e) => this.setState({ selectedproduct: data, visible: true })}></Button>
            </div>
        </div>
    );
}

renderGridItem(data) {
    return (
        <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
            <Panel header={data.id} style={{ textAlign: 'center' }}>
                <div className="product-detail">{data.name} - {data.stock}</div>
                <Button icon="pi pi-search" onClick={(e) => this.setState({ selectedproduct: data, visible: true })}></Button>
            </Panel>
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

renderProductDialogContent() {
  if (this.state.selectedProduct) {
      return (
          <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>

              <div className="p-col-4">id: </div>
              <div className="p-col-8">{this.state.selectedProduct.id}</div>

              <div className="p-col-4">name: </div>
              <div className="p-col-8">{this.state.selectedProduct.name}</div>

              <div className="p-col-4">price: </div>
              <div className="p-col-8">{this.state.selectedProduct.price}</div>

              <div className="p-col-4">description: </div>
              <div className="p-col-8">{this.state.selectedProduct.description}</div>

              <div className="p-col-4">stock: </div>
              <div className="p-col-8">{this.state.selectedProduct.stock}</div>
          </div>
      );
  }
  else {
      return null;
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
          <div className="p-col-6" style={{textAlign: 'right'}}>
              <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
          </div>
          </div>
  );
}

  render(){//id name price description stock
    const header = this.renderHeader();
    return(
      <div className="dataview-demo">
        <DataView value={this.state.products} layout={this.state.layout} header={header}
                itemTemplate={this.itemTemplate} aginator={true} paginatorPosition={'both'} p rows={20}
                sortOrder={this.state.sortOrder} sortField={this.state.sortField} />

        <Dialog header="Product Details" visible={this.state.visible} modal={true} onHide={() => this.setState({visible: false})}>
            {this.renderProductDialogContent()}
        </Dialog>
      </div>
    )
  }
}
export default App;