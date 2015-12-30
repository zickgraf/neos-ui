import Immutable from 'immutable';

export default serverState => Immutable.fromJS({
    ui: {
        //
        // Contains information about the currently open Tabs
        //
        tabs: {
            byId: {},
            active: {
                id: '',
                workspace: {
                    name: '',
                    publishingState: {
                        publishableNodes: [],
                        publishableNodesInDocument: []
                    }
                }
            }
        },

        contextBar: {}
    },

    //
    // Contains information about all nodes the are currently loaded
    //
    nodes: {
        byContextPath: {},
        selected: {}
    },

    //
    // Contains information to render the page tree
    //
    pageTree: {},

    //
    // Contains the current set of changes
    //
    changes: []

}).mergeDeep(Immutable.fromJS(serverState));
