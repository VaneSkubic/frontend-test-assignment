import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class KeywordsTableComponent extends Component {
    @tracked filterText = '';
    @tracked sortColumn = 'query';
    @tracked sortAscending = true;

    @action
    updateSort(column) {
        if (this.sortColumn === column) {
            this.sortAscending = !this.sortAscending;
        } else {
            this.sortColumn = column;
            this.sortAscending = true;
        }
    }

    @action
    updateFilter(event) {
        this.filterText = event.target.value.toLowerCase();
    }

    get filteredAndSortedKeywords() {

        if (!this.args.keywords) {
            return []
        }

        let filteredKeywords = this.args.keywords.filter((keyword) =>
            keyword.query.toLowerCase().includes(this.filterText.toLowerCase()),
        );
        return filteredKeywords.sort((a, b) => {
            let valueA = a[this.sortColumn];
            let valueB = b[this.sortColumn];

            if (valueA < valueB) {
                return this.sortAscending ? -1 : 1;
            } else if (valueA > valueB) {
                return this.sortAscending ? 1 : -1;
            }
            return 0;
        });
    }
}
