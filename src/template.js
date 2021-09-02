const teamCards = team => {

    const managerCard = manager => {
        return `
        <div class="card employee-card bg-danger">
            <div class="card-header">${manager.getName()}</div>
            <div class="card-header">${manager.getRole()}</div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const engineerCard = engineer => {
        return `
        <div class="card employee-card bg-warning">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-header">${engineer.getRole()}</div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id: ${engineer.getId()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    const internCards = intern => {
        return `
        <div class="card employee-card bg-info">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-header">${intern.getRole()}</div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id: ${intern.getId()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        </div>
        `;
    };
}