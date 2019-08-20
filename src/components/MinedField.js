import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return (
                <Field onOpen={() => props.onOpenField(r, c)}
                    onSelect={e => props.onSelectField(r, c)}
                    {...field} key={c}/>
            )

        })
        return <View style={{flexDirection: 'row'}}
        key={r}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})