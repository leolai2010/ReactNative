import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules //something only android need to enable animation
 } from 'react-native';
import * as actions from '../actions';

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true)
    //helper function to enable NativeModules to enable animations

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded){
            return (
                <CardSection>
                    <Text style={{flex:1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    //important!! please take note
    return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
// export default connect(null, actions)(ListItem);
// pass in null because we dont need to
// map to the library. (user input) instead
// we pass through action to change state!