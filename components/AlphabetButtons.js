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
    }

    onTrigger(prop) {
        this.props.parentCallback(prop)
    }

    aj = ["A", "B", "C", "D", "E", "F", "G", "I", "J"]
    ks = ["K", "L", "M", "N", "O", "P", "Q", "R", "S"]
    ta = ["T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"]  
 
    render() {
        let selectedLanguage = this.props.language
        if(selectedLanguage == 0) {
            return (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    flex: 1,
                    
                }}> 
                    <View style={styles.buttonView}>
                        {this.aj.map((prop, index) => {
                            return (
                                <Button 
                                title={prop}
                                onPress={() => {
                                    this.onTrigger(prop)
                                    //this.props.whenClicked()
                                }}
                                ></Button>
                                )
                        })}
                    </View>
                    <View style={styles.buttonView}>
                        {this.ks.map((prop, index) => {
                            return (
                                <Button
                                    title={prop}
                                    onPress={() => {
                                        this.onTrigger(prop)
                                        //this.props.whenClicked()
                                    }}
                                ></Button>
                            )
                        })}
                    </View>
                    <View style={[styles.buttonView, lastViewStyle]}>
                        {this.ta.map((prop, index) => {
                            return (
                                <Button
                                    title={prop}
                                    onPress={() => {
                                        this.onTrigger(prop)
                                        //this.props.whenClicked()
                                    }}
                                ></Button>
                            )
                        })}
                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Button title="test"></Button>
                </View>
            )
        }
        // else {
        //     return (
        //         <View style={{
        //             flexDirection: 'column',
        //             marginLeft: 20, 
        //             flex: 1,
        //             justifyContent: "space-between"     
        //         }}> 
        //             <View style={{
        //                 flexDirection: "row",
        //                 flex: 1,
        //                 justifyContent: "space-between",
        //                 marginBottom: 20,
        //                 marginRight: 10,
        //             }}>
        //                 <Button
        //                     title="A"
        //                     onPress={this.props.whenClicked()}
        //                     style={{
        //                         outerWidth: 30,
        //                     }}
        //                 ></Button>
        //                 <Button
        //                     title="B"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="C"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="D"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="E"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="F"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="G"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="H"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="I"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //             </View>
        //             <View style={{
        //                 flexDirection: "row",
        //                 flex: 1,
        //                 justifyContent: "space-between",
        //                 marginBottom: 10,
        //                 marginRight: 10
        //             }}>
        //                 <Button
        //                     title="J"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="K"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="L"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="M"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="N"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="O"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="P"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="Q"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="R"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //             </View>
        //             <View style={{
        //                 flexDirection: "row",
        //                 flex: 1,
        //                 justifyContent: "space-between",
        //                 marginBottom: 10,
        //                 marginRight: 10
        //             }}>
        //                 <Button
        //                     title="S"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="T"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="U"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="V"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="W"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="X"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="Y"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //                 <Button
        //                     title="Z"
        //                     onPress={this.props.whenClicked()}
        //                 ></Button>
        //             </View>
        //         </View>
        //     )
        // }
    }
}

const lastViewStyle = { paddingBottom: 20 }

const styles = StyleSheet.create ({
    buttonView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
    },
})