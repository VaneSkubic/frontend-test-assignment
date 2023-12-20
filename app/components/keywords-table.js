import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class KeywordsTableComponent extends Component {
    @tracked filterText = '';

    @action
    updateFilter(event) {
        this.filterText = event.target.value.toLowerCase();
    }

    @computed('args.keywords', 'filterText')
    get filteredKeywords() {
        if (!this.filterText) {
            return this.args.keywords;
        }

        return this.args.keywords.filter(keyword =>
            keyword.query.toLowerCase().includes(this.filterText)
        );
    }
}
