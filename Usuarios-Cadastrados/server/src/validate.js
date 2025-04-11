export function validateUserData({ name, email, age }) {
    const errors = [];
  
    const parsedAge = parseInt(age, 10);
  
    if (!name || typeof name !== 'string') {
      errors.push('Nome é obrigatório e deve ser uma string.');
    }
  
    if (!email || typeof email !== 'string') {
      errors.push('Email é obrigatório e deve ser uma string.');
    }
  
    if (isNaN(parsedAge) || parsedAge < 0) {
      errors.push('Idade é obrigatória, deve ser um número e não pode ser menor que 0.');
    }
  
    return {
      isValid: errors.length === 0,
      errors,
      age: parsedAge
    };
  }
  