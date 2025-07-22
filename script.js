const supabaseUrl = 'https://rkekvyqhkcxnglydvudt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZWt2eXFoa2N4bmdseWR2dWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNzc0OTIsImV4cCI6MjA2ODc1MzQ5Mn0.y8p_hVfz4jpxeLTG3D4X6Khj3tNNu-zuSK5ti7ygrGY';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('contribution-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const memorial = document.getElementById('memorial').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const paymentDate = document.getElementById('payment-date').value;

    const { data, error } = await _supabase
        .from('contributions')
        .insert([
            { name, memorial, phone, amount, payment_date: paymentDate },
        ]);

    if (error) {
        alert('An error occurred: ' + error.message);
    } else {
        alert('Form submitted successfully!');
        form.reset();
    }
});
