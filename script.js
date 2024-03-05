document.getElementById('add-recipe-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipe-name').value;
    const recipeIngredients = document.getElementById('recipe-ingredients').value;
    const recipeInstructions = document.getElementById('recipe-instructions').value;

    if (!recipeName || !recipeIngredients || !recipeInstructions) {
        alert('Please fill in all fields');
        return;
    }

    const recipe = document.createElement('div');
    recipe.classList.add('recipe');

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipeName;

    const recipeIngredientsParagraph = document.createElement('p');
    recipeIngredientsParagraph.textContent = 'Ingredients: ' + recipeIngredients;

    const recipeInstructionsParagraph = document.createElement('p');
    recipeInstructionsParagraph.textContent = 'Instructions: ' + recipeInstructions;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        recipe.remove();
    });

    recipe.appendChild(recipeTitle);
    recipe.appendChild(recipeIngredientsParagraph);
    recipe.appendChild(recipeInstructionsParagraph);
    recipe.appendChild(deleteButton);

    document.getElementById('recipes').appendChild(recipe);

    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-ingredients').value = '';
    document.getElementById('recipe-instructions').value = '';
});