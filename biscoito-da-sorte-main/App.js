import React, { Component } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "Bem Vindo",
      img: require("./assets/imagens/biscoito.jpg"),
    };

    this.toraBiscoito = this.toraBiscoito.bind(this);

    this.frases = [
      "Somos DEBRAVADORES",
      "Gambiarra não,Adpatação técnica",
      "Para de frescura e vai estudar vagabundo",
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];
  }

  toraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require("./assets/imagens/biscoitoAberto.jpg"),
    });
  }

  render() {
    return (
      <View style={style.container}>
        <Image source={this.state.img} style={style.imgStyle} />
        <Text style={style.textoFrase}>"{this.state.textoFrase}"</Text>
        <TouchableOpacity style={style.btn} onPress={this.toraBiscoito}>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Quebre o biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  textoFrase: {
    textAlign: "center",
    fontSize: 25,
    margin: 35,
    color: "#50e52e",
    fontStyle: "italic",
  },
  imgStyle: {
    width: 350,
    height: 350,
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#4bd82c",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
