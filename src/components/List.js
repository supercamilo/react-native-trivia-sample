// @flow

import React from 'react';
import { FlatList, SectionList } from 'react-native';

class List extends React.PureComponent<{
    list: Array<any>,
    renderItem: () => mixed,
    renderSectionHeader?: () => mixed,
    scrollToEnd?: boolean,
    idField?: string}> {
    _list: FlatList | SectionList;

    static defaultProps = {
        renderSectionHeader: null,
        scrollToEnd: false,
        idField: 'id',
    };

    componentDidMount() {
        const { scrollToEnd } = this.props;
        if (scrollToEnd) {
            this._list.scrollToEnd({ animated: true });
        }
    }

    render(): React$Element<FlatList | SectionList> {
        const { list, renderItem, renderSectionHeader, idField } = this.props;

        if (renderSectionHeader) {
            return (
                <SectionList
                    sections={list}
                    keyExtractor={(item) => item[idField]}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                />
            );
        }

        return (
            <FlatList
                data={list}
                keyExtractor={(item) => item[idField]}
                renderItem={renderItem}
                ref={(c) => (this._list = c)}
            />
        );
    }
}

export default List;
