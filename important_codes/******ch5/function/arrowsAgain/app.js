{
    let group = {
        title: 'our group',
        students: ['thomas', 'john', 'ada', 'arthur', 'finn'],
        showMembers() {
            this.students.forEach(
                student => console.log(this.title + ' : ' + student)
            );
        }
    }
    group.showMembers();

}
{
    let group = {
        title: 'our group',
        students: ['thomas', 'john', 'ada', 'arthur', 'finn'],
        showMembers() {
            let ctx = this;
            this.students.forEach(
                //student => console.log(this.title + ' : ' + student)
                function (student) {
                    console.log(ctx.title + ' : ' + student);
                }
            );
        }
    }
    group.showMembers();
}