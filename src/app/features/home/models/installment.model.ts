interface Installment {
  id: string;
  title: string;
  dueDate: string;
  amount: number;
  status: 'warning' | 'info' | 'success';
  statusText: string;
}
