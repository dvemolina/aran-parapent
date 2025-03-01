<script lang="ts">

    let { showModal = $bindable(false), title = "Contactar" } = $props();
    const phoneNumber = "+34649964007"; // Set your phone number

    function closeContactModal() {
        showModal = false;
    }
    
    export function callNumber() {
        window.location.href = `tel:${phoneNumber}`;
        closeContactModal();
    }
    
    export function messageOnWhatsApp() {
        window.location.href = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
        closeContactModal();
    }
    
    // Close modal when clicking outside
    function handleClickOutside(event: MouseEvent) {
        if ((event.target as HTMLElement).id === "contactModal") {
        closeContactModal();
    }
}
</script>

<div id="contactModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-990"  onclick={handleClickOutside}>
    <div class="bg-white rounded-lg shadow-lg p-6 w-80 text-center relative">
      <h2 class="text-lg font-semibold mb-4">{title}</h2>
      <button onclick={callNumber} class="w-full bg-blue-500 text-white py-2 rounded-md mb-2">📞 Llamada</button>
      <button onclick={messageOnWhatsApp} class="w-full bg-green-500 text-white py-2 rounded-md">💬 WhatsApp</button>
      <button onclick={closeContactModal} class="absolute top-2 right-3 text-gray-500 text-lg">✖</button>
    </div>
</div>3