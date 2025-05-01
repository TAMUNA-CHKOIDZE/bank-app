class BankAccount {
  // private property
  #balance = 0; // a default value

  // constructor
  constructor(balanceElement) {
    this.balanceElement = balanceElement;
    // balanceElement-ის არგუმენტად რაც შემოვა ის ჩაიწერება
    this.#updateUI();
  }

  // deposit method
  deposit(amount) {
    // თუ ჩარიცხული თანხა 0-ზე მეტი იქნება მხოლოდ მაგ შემთხვევაში ბალანსს დაემატოს ჩარიცხული amount და განახლდეს UI ანუ span-შიც ჩაიწეროს განახლებული რიცხვი
    if (amount > 0) {
      this.#balance += amount;
      this.#updateUI();
    }
  }

  // withdraw method
  withdraw(amount) {
    // მხოლოდ მაშინ თუ გამოსატანი თანხა 0 ლარზე მეტი და ბალანსზე არსებულ თანხაზე ნაკლები ან ტოლი იქნება, #balance-ში შეინახოს #balance-სს გამოკლებული amount. განახლდეს UI ანუ span-შიც ჩაიწეროს განახლებული რიცხვი
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#updateUI();
    } else {
      alert("ბარათზე არ არის საკმარისი თანხა!");
    }
  }

  // private method
  #updateUI() {
    // განახლდეს UI ანუ span-ში ჩაიწეროს #balance-ის მნიშვნელობა
    this.balanceElement.textContent = this.#balance;
  }
}

// ელემენტების დასელექთება
const balanceElement = document.getElementById("balanceElement");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// ახალი ობიექტი: instance
const bankAccount = new BankAccount(balanceElement);

// depositBtn-ზე კლიკისას amountInput-ს მნიშვნელობას გადავაქცევ რიცხვად (მთელიც და ათწილადიც) და შევინახავ amount ცვლადში. თუ amount-ში შენახული მნიშვნელობა არ არის სტრინგი, მოხდება deposit ფუნქციის (მეთოდის) გამოძახება instance-ზე. input გასუფთავდება, ხელით რომ არ მოუწიოს მომხმარებელს გასუფთავება
depositBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount)) {
    bankAccount.deposit(amount);
    amountInput.value = "";
  }
});

withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount)) {
    bankAccount.withdraw(amount);
    amountInput.value = "";
  }
});
