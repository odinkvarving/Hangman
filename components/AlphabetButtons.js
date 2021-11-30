import React, { Component } from 'react';

import {
    View,
    Button,
    Text,
    StyleSheet,
} from 'react-native'
import App from '../App';

export default class AlphabetButtons extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            color: "",
            buttonClicked: "",
            gameOver: false,
            disabled_A: false,
            disabled_B: false,
            disabled_C: false,
            disabled_E: false,
            disabled_F: false,
            disabled_G: false,
            disabled_H: false,
            disabled_I: false,
            disabled_J: false,
            disabled_K: false,
            disabled_L: false,
            disabled_M: false,
            disabled_N: false,
            disabled_O: false,
            disabled_P: false,
            disabled_Q: false,
            disabled_R: false,
            disabled_S: false,
            disabled_T: false,
            disabled_U: false,
            disabled_V: false,
            disabled_W: false,
            disabled_X: false,
            disabled_Y: false,
            disabled_Z: false,
            disabled_AE: false,
            disabled_OE: false,
            disabled_AA: false,
        }  
    }

    onTrigger(prop) {
        this.props.parentCallback(prop)
        if(this.props.gameOver == true) {
            this.resetButtons()
        }
    }

    resetButtons() {
        this.setState({ disabled_A: false, disabled_B: false, disabled_C: false, disabled_D: false, disabled_E: false, disabled_F: false, disabled_G: false, disabled_H: false, disabled_I: false, disabled_J: false, disabled_K: false, disabled_L: false, disabled_M: false, disabled_N: false, disabled_O: false, disabled_P: false, disabled_Q: false, disabled_R: false, disabled_S: false, disabled_T: false, disabled_U: false, disabled_V: false, disabled_W: false, disabled_X: false, disabled_Y: false, disabled_Z: false, disabled_AE: false, disabled_OE: false, disabled_AA: false
        }, () => { this.setState({ gameOver: true})})
        this.props.endTheGame()
    }

    disableButtonA() {this.setState({ disabled_A: true})}

    disableButtonB() {this.setState({ disabled_B: true})}

    disableButtonC() {this.setState({ disabled_C: true})}

    disableButtonD() {this.setState({ disabled_D: true})}

    disableButtonE() {this.setState({ disabled_E: true})}

    disableButtonF() {this.setState({ disabled_F: true})}

    disableButtonG() {this.setState({ disabled_G: true})}

    disableButtonH() {this.setState({ disabled_H: true})}

    disableButtonI() {this.setState({ disabled_I: true})}

    disableButtonJ() {this.setState({ disabled_J: true})}

    disableButtonK() {this.setState({ disabled_K: true})}

    disableButtonL() {this.setState({ disabled_L: true})}

    disableButtonM() {this.setState({ disabled_M: true})}

    disableButtonN() {this.setState({ disabled_N: true})}

    disableButtonO() {this.setState({ disabled_O: true})}

    disableButtonP() {this.setState({ disabled_P: true})}

    disableButtonQ() {this.setState({ disabled_Q: true})}

    disableButtonR() {this.setState({ disabled_R: true})}

    disableButtonS() {this.setState({ disabled_S: true})}

    disableButtonT() {this.setState({ disabled_T: true})}

    disableButtonU() {this.setState({ disabled_U: true})}

    disableButtonV() {this.setState({ disabled_V: true})}

    disableButtonW() {this.setState({ disabled_W: true})}

    disableButtonX() {this.setState({ disabled_X: true})}

    disableButtonY() {this.setState({ disabled_Y: true})}

    disableButtonZ() {this.setState({ disabled_Z: true})}

    disableButtonAE() {this.setState({ disabled_AE: true})}

    disableButtonOE() {this.setState({ disabled_OE: true})}

    disableButtonAA() {this.setState({ disabled_AA: true})}

    aj = ["A", "B", "C", "D", "E", "F", "G", "I", "J"]
    ks = ["K", "L", "M", "N", "O", "P", "Q", "R", "S"]
    ta = ["T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"]
 
    render() {
        let selectedLanguage = this.props.language
        let buttonClicked = this.props.buttonClicked
        let colorAfterClick = this.props.colorAfterClick
        let gameOver = this.props.gameOver
        if(selectedLanguage == 0) {
            return (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    flex: 1,
                    backgroundColor: "#fff"
                    
                }}> 
                    <View style={styles.buttonView}>
                        <Button
                            title="A"
                            onPress={() => {
                                this.onTrigger("A")
                                this.disableButtonA()
                            }}
                            disabled={this.state.disabled_A}
                        ></Button>
                        <Button
                            title="B"
                            onPress={() => {
                                this.onTrigger("B")
                                this.disableButtonB()
                            }}
                            disabled={this.state.disabled_B}
                        ></Button>
                        <Button
                            title="C"
                            onPress={() => {
                                this.onTrigger("C")
                                this.disableButtonC()
                            }}
                            disabled={this.state.disabled_C}
                        ></Button>
                        <Button
                            title="D"
                            onPress={() => {
                                this.onTrigger("D")
                                this.disableButtonD()
                            }}
                            disabled={this.state.disabled_D}
                        ></Button>
                        <Button
                            title="E"
                            onPress={() => {
                                this.onTrigger("E")
                                this.disableButtonE()
                            }}
                            disabled={this.state.disabled_E}
                        ></Button>
                        <Button
                            title="F"
                            onPress={() => {
                                this.onTrigger("F")
                                this.disableButtonF()
                            }}
                            disabled={this.state.disabled_F}
                        ></Button>
                        <Button
                            title="G"
                            onPress={() => {
                                this.onTrigger("G")
                                this.disableButtonG()
                            }}
                            disabled={this.state.disabled_G}
                        ></Button>
                        <Button
                            title="H"
                            onPress={() => {
                                this.onTrigger("H")
                                this.disableButtonH()
                            }}
                            disabled={this.state.disabled_H}
                        ></Button>
                        <Button
                            title="I"
                            onPress={() => {
                                this.onTrigger("I")
                                this.disableButtonI()
                            }}
                            disabled={this.state.disabled_I}
                        ></Button>
                        <Button
                            title="J"
                            onPress={() => {
                                this.onTrigger("J")
                                this.disableButtonJ()
                            }}
                            disabled={this.state.disabled_J}
                        ></Button>
                    </View>
                    <View style={styles.buttonView}> 
                        <Button
                            title="K"
                            onPress={() => {
                                this.onTrigger("K")
                                this.disableButtonK()
                            }}
                            disabled={this.state.disabled_K}
                        ></Button>
                        <Button
                            title="L"
                            onPress={() => {
                                this.onTrigger("L")
                                this.disableButtonL()
                            }}
                            disabled={this.state.disabled_L}
                        ></Button>
                        <Button
                            title="M"
                            onPress={() => {
                                this.onTrigger("M")
                                this.disableButtonM()
                            }}
                            disabled={this.state.disabled_M}
                        ></Button>
                        <Button
                            title="N"
                            onPress={() => {
                                this.onTrigger("N")
                                this.disableButtonN()
                            }}
                            disabled={this.state.disabled_N}
                        ></Button>
                        <Button
                            title="O"
                            onPress={() => {
                                this.onTrigger("O")
                                this.disableButtonO()
                            }}
                            disabled={this.state.disabled_O}
                        ></Button>
                        <Button
                            title="P"
                            onPress={() => {
                                this.onTrigger("P")
                                this.disableButtonP()
                            }}
                            disabled={this.state.disabled_P}
                        ></Button>
                        <Button
                            title="Q"
                            onPress={() => {
                                this.onTrigger("Q")
                                this.disableButtonQ()
                            }}
                            disabled={this.state.disabled_Q}
                        ></Button>
                        <Button
                            title="R"
                            onPress={() => {
                                this.onTrigger("R")
                                this.disableButtonR()
                            }}
                            disabled={this.state.disabled_R}
                        ></Button>
                         <Button
                            title="S"
                            onPress={() => {
                                this.onTrigger("S")
                                this.disableButtonS()
                            }}
                            disabled={this.state.disabled_S}
                        ></Button>
                    </View>
                    <View style={[styles.buttonView, lastViewStyle]}>
                         <Button
                            title="T"
                            onPress={() => {
                                this.onTrigger("T")
                                this.disableButtonT()
                            }}
                            disabled={this.state.disabled_T}
                        ></Button>
                         <Button
                            title="U"
                            onPress={() => {
                                this.onTrigger("U")
                                this.disableButtonU()
                            }}
                            disabled={this.state.disabled_U}
                        ></Button>
                        <Button
                            title="V"
                            onPress={() => {
                                this.onTrigger("V")
                                this.disableButtonV()
                            }}
                            disabled={this.state.disabled_V}
                        ></Button>
                         <Button
                            title="W"
                            onPress={() => {
                                this.onTrigger("W")
                                this.disableButtonW()
                            }}
                            disabled={this.state.disabled_W}
                        ></Button>
                         <Button
                            title="X"
                            onPress={() => {
                                this.onTrigger("X")
                                this.disableButtonX()
                            }}
                            disabled={this.state.disabled_X}
                        ></Button>
                         <Button
                            title="Y"
                            onPress={() => {
                                this.onTrigger("Y")
                                this.disableButtonY()
                            }}
                            disabled={this.state.disabled_Y}
                        ></Button>
                         <Button
                            title="Z"
                            onPress={() => {
                                this.onTrigger("Z")
                                this.disableButtonZ()
                            }}
                            disabled={this.state.disabled_Z}
                        ></Button>
                         <Button
                            title="Æ"
                            onPress={() => {
                                this.onTrigger("Æ")
                                this.disableButtonAE()
                            }}
                            disabled={this.state.disabled_AE}
                        ></Button>
                         <Button
                            title="Ø"
                            onPress={() => {
                                this.onTrigger("Ø")
                                this.disableButtonOE()
                            }}
                            disabled={this.state.disabled_OE}
                        ></Button>
                         <Button
                            title="Å"
                            onPress={() => {
                                this.onTrigger("Å")
                                this.disableButtonAA()
                            }}
                            disabled={this.state.disabled_AA}
                        ></Button>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingBottom: 30,    
                    }}>
                        <Button
                            title="Nullstill"
                            onPress={() => {
                                this.onTrigger("nullstill")
                            }}
                        ></Button>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    flex: 1,     
                }}> 
                    <View style={styles.buttonView}>
                        <Button
                            title="A"
                            onPress={() => {
                                this.onTrigger("A")
                                this.disableButtonA()
                            }}
                            disabled={this.state.disabled_A}
                        ></Button>
                        <Button
                            title="B"
                            onPress={() => {
                                this.onTrigger("B")
                                this.disableButtonB()
                            }}
                            disabled={this.state.disabled_B}
                        ></Button>
                        <Button
                            title="C"
                            onPress={() => {
                                this.onTrigger("C")
                                this.disableButtonC()
                            }}
                            disabled={this.state.disabled_C}
                        ></Button>
                        <Button
                            title="D"
                            onPress={() => {
                                this.onTrigger("D")
                                this.disableButtonD()
                            }}
                            disabled={this.state.disabled_D}
                        ></Button>
                        <Button
                            title="E"
                            onPress={() => {
                                this.onTrigger("E")
                                this.disableButtonE()
                            }}
                            disabled={this.state.disabled_E}
                        ></Button>
                        <Button
                            title="F"
                            onPress={() => {
                                this.onTrigger("F")
                                this.disableButtonF()
                            }}
                            disabled={this.state.disabled_F}
                        ></Button>
                        <Button
                            title="G"
                            onPress={() => {
                                this.onTrigger("G")
                                this.disableButtonG()
                            }}
                            disabled={this.state.disabled_G}
                        ></Button>
                        <Button
                            title="H"
                            onPress={() => {
                                this.onTrigger("H")
                                this.disableButtonH()
                            }}
                            disabled={this.state.disabled_H}
                        ></Button>
                        <Button
                            title="I"
                            onPress={() => {
                                this.onTrigger("I")
                                this.disableButtonI()
                            }}
                            disabled={this.state.disabled_I}
                        ></Button>
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            title="J"
                            onPress={() => {
                                this.onTrigger("J")
                                this.disableButtonJ()
                            }}
                            disabled={this.state.disabled_J}
                        ></Button>
                        <Button
                            title="K"
                            onPress={() => {
                                this.onTrigger("K")
                                this.disableButtonK()
                            }}
                            disabled={this.state.disabled_K}
                        ></Button>
                        <Button
                            title="L"
                            onPress={() => {
                                this.onTrigger("L")
                                this.disableButtonL()
                            }}
                            disabled={this.state.disabled_L}
                        ></Button>
                        <Button
                            title="M"
                            onPress={() => {
                                this.onTrigger("M")
                                this.disableButtonM()
                            }}
                            disabled={this.state.disabled_M}
                        ></Button>
                        <Button
                            title="N"
                            onPress={() => {
                                this.onTrigger("N")
                                this.disableButtonN()
                            }}
                            disabled={this.state.disabled_N}
                        ></Button>
                        <Button
                            title="O"
                            onPress={() => {
                                this.onTrigger("O")
                                this.disableButtonO()
                            }}
                            disabled={this.state.disabled_O}
                        ></Button>
                        <Button
                            title="P"
                            onPress={() => {
                                this.onTrigger("P")
                                this.disableButtonP()
                            }}
                            disabled={this.state.disabled_P}
                        ></Button>
                        <Button
                            title="Q"
                            onPress={() => {
                                this.onTrigger("Q")
                                this.disableButtonQ()
                            }}
                            disabled={this.state.disabled_Q}
                        ></Button>
                        <Button
                            title="R"
                            onPress={() => {
                                this.onTrigger("R")
                                this.disableButtonR()
                            }}
                            disabled={this.state.disabled_R}
                        ></Button>
                    </View>
                    <View style={[styles.buttonView, lastViewStyle]}>
                        <Button
                            title="S"
                            onPress={() => {
                                this.onTrigger("S")
                                this.disableButtonS()
                            }}
                            disabled={this.state.disabled_S}
                        ></Button>
                        <Button
                            title="T"
                            onPress={() => {
                                this.onTrigger("T")
                                this.disableButtonT()
                            }}
                            disabled={this.state.disabled_T}
                        ></Button>
                        <Button
                            title="U"
                            onPress={() => {
                                this.onTrigger("U")
                                this.disableButtonU()
                            }}
                            disabled={this.state.disabled_U}
                        ></Button>
                        <Button
                            title="V"
                            onPress={() => {
                                this.onTrigger("V")
                                this.disableButtonV()
                            }}
                            disabled={this.state.disabled_V}
                        ></Button>
                        <Button
                            title="W"
                            onPress={() => {
                                this.onTrigger("W")
                                this.disableButtonW()
                            }}
                            disabled={this.state.disabled_W}
                        ></Button>
                        <Button
                            title="X"
                            onPress={() => {
                                this.onTrigger("X")
                                this.disableButtonX()
                            }}
                            disabled={this.state.disabled_X}
                        ></Button>
                        <Button
                            title="Y"
                            onPress={() => {
                                this.onTrigger("Y")
                                this.disableButtonY()
                            }}
                            disabled={this.state.disabled_Y}
                        ></Button>
                        <Button
                            title="Z"
                            onPress={() => {
                                this.onTrigger("Z")
                                this.disableButtonZ()
                            }}
                            disabled={this.state.disabled_Z}
                        ></Button>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingBottom: 30,    
                    }}>
                        <Button
                            title="RESET"
                            onPress={() => {
                                this.onTrigger("reset")
                            }}
                        ></Button>
                    </View>
                </View>
            )
        }
    }
}

const lastViewStyle = { paddingBottom: 0, marginBottom: 10 }

const styles = StyleSheet.create ({
    buttonView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: "#fff"
    },
})