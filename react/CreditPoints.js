import React, { Component } from 'react';
import api from './api';

class CreditPoints extends Component {

    state = {
        filmes: [],
      }
    
      async componentDidMount() {
        const response = await api.get('star%20wars');
    
        this.setState({ filmes: response.data });
      }
    
      render() {
    
        const { filmes } = this.state;
    
        return (
          <div>
            <h1>Listar os Filmes</h1>
            {filmes.map(filme => (
              <li key={filme.show.id}>
                <h2>
                  <strong>Pontos: </strong>
                  {filme.show.name}
                </h2>
                   
              </li>
            ))}
          </div>
        );
      };
    };



export default CreditPoints